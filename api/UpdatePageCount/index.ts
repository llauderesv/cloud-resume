import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { TableStorage, PageViewCount } from './tableStorage';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const tableStorage = TableStorage();
  const count: PageViewCount = await tableStorage.getPageCount();
  await tableStorage.incrementPageCount(count);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { count },
  };
};

export default httpTrigger;
