/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ListItem } from '../models/list-item';

@Injectable({
  providedIn: 'root',
})
export class ListItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listItemsGet
   */
  static readonly ListItemsGetPath = '/ListItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ListItem>>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ListItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsGet$Plain(params?: {
  }): Observable<Array<ListItem>> {

    return this.listItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ListItem>>) => r.body as Array<ListItem>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ListItem>>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ListItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsGet$Json(params?: {
  }): Observable<Array<ListItem>> {

    return this.listItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ListItem>>) => r.body as Array<ListItem>)
    );
  }

  /**
   * Path part for operation listItemsPost
   */
  static readonly ListItemsPostPath = '/ListItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  listItemsPost$Plain$Response(params?: {
    body?: string
  }): Observable<StrictHttpResponse<ListItem>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  listItemsPost$Plain(params?: {
    body?: string
  }): Observable<ListItem> {

    return this.listItemsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ListItem>) => r.body as ListItem)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  listItemsPost$Json$Response(params?: {
    body?: string
  }): Observable<StrictHttpResponse<ListItem>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  listItemsPost$Json(params?: {
    body?: string
  }): Observable<ListItem> {

    return this.listItemsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ListItem>) => r.body as ListItem)
    );
  }

  /**
   * Path part for operation listItemsIdGet
   */
  static readonly ListItemsIdGetPath = '/ListItems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsIdGet(params: {
    id: number;
  }): Observable<void> {

    return this.listItemsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation listItemsIdDelete
   */
  static readonly ListItemsIdDeletePath = '/ListItems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listItemsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ListItemsService.ListItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listItemsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listItemsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.listItemsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
