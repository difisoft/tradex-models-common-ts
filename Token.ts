/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {UserData} from "./UserData";

/**
 * A geographical coordinate
 */
export interface Token {
  domain?: null | string;
  userId?: null | number;
  serviceCode?: null | string;
  connectionId?: null | string;
  /**
   * only use for vcsc rest
   */
  sessionId?: null | string;
  serviceId?: null | string;
  serviceName?: null | string;
  clientId?: null | number;
  serviceUserId?: null | number;
  loginMethod?: null | number;
  refreshTokenId?: number;
  scopeGroupIds?: number[];
  serviceUsername?: null | string;
  userData?: UserData;
  [k: string]: any;
}
