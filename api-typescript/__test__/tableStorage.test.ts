import { TableClient, TableEntity } from '@azure/data-tables';
import { TableStorage, ITableStorage, Entity } from '../UpdatePageCount/tableStorage';

describe('TableStorage', () => {
  let _tableStorage: ITableStorage;
  const listEntriesMock = {
    next: () => ({ value: { count: 100 } }),
  };

  const serviceClient = {
    listEntities: jest.fn().mockReturnValue(listEntriesMock),
    upsertEntity: jest.fn(),
  };

  beforeEach(() => {
    TableClient.fromConnectionString = jest.fn().mockReturnValue(serviceClient);
    _tableStorage = TableStorage();
  });

  // it should get page count
  it('should get page count', async () => {
    const count = await _tableStorage.getPageCount();

    const listEntities = jest.spyOn(serviceClient, 'listEntities');
    const arg = {
      queryOptions: {
        filter: `PartitionKey eq '${Entity.PartitionKey}' and RowKey eq '${Entity.RowKey}'`,
      },
    };

    expect(count).toBe(100);
    expect(listEntities).toBeCalledWith(arg);
  });

  it('should increment page count from table storage', async () => {
    const count = await _tableStorage.getPageCount();
    await _tableStorage.incrementPageCount(count);

    const upsertEntity = jest.spyOn(serviceClient, 'upsertEntity');
    const entity: TableEntity = {
      partitionKey: Entity.PartitionKey,
      rowKey: Entity.RowKey,
      count: 101,
    };
    expect(upsertEntity).toBeCalledWith(entity, 'Merge');
  });
});
