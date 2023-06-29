import { fetchJsonReportOsspoiMaster } from '../utils/fatch_json_report';
import { osspoiMaster } from '../data-store/dataStore';


// export const languagesList = 

export let poi = new Map<string, any>();

export async function getJsonReportOsspoiMaster(): Promise<any> {
  return await fetchJsonReportOsspoiMaster(osspoiMaster);
}

export default poi;
