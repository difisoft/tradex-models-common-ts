/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {Token} from "./Token";

/**
 * header for each request
 */
export interface RequestHeader {
  token?: null | Token;
  secToken?: null | Token;
  "accept-language"?: null | string;
  [k: string]: any;
}
