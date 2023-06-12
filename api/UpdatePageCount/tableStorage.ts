import { TableClient, TableEntity } from '@azure/data-tables';
import * as dotenv from 'dotenv';
dotenv.config();

enum Entity {
  PartitionKey = 'PageViewCount',
  RowKey = 'R1',
}

type PageViewCount = number;

export interface ITableStorage {
  getPageCount: () => Promise<number>;
  incrementPageCount: (count: PageViewCount) => Promise<void>;
}

function TableStorage(): ITableStorage {
  const { COSMOS_DB_TABLE_CONNECTION_STRING, COSMOS_DB_TABLE_NAME } = process.env;
  const serviceClient = TableClient.fromConnectionString(
    COSMOS_DB_TABLE_CONNECTION_STRING,
    COSMOS_DB_TABLE_NAME
  );

  async function getPageCount(): Promise<number> {
    const allRowsEntities = serviceClient.listEntities({
      queryOptions: {
        filter: `PartitionKey eq '${Entity.PartitionKey}' and RowKey eq '${Entity.RowKey}'`,
      },
    });

    const res = await allRowsEntities.next();
    let count: PageViewCount;
    if (res) {
      count = res.value?.count || 0;
    }

    return count;
  }

  async function incrementPageCount(count: PageViewCount): Promise<void> {
    const entity: TableEntity = {
      partitionKey: Entity.PartitionKey,
      rowKey: Entity.RowKey,
      count: ++count,
    };

    await serviceClient.upsertEntity(entity, 'Merge');
  }

  return {
    getPageCount,
    incrementPageCount,
  };
}

export { TableStorage, PageViewCount, Entity };
