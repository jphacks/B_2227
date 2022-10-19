/**
 * @fileoverview gRPC-Web generated client stub for prolis
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.18.1
// source: grpc.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as grpc_pb from './grpc_pb';


export class TopPageClientClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorfetchAudioList = new grpcWeb.MethodDescriptor(
    '/prolis.TopPageClient/fetchAudioList',
    grpcWeb.MethodType.UNARY,
    grpc_pb.Empty,
    grpc_pb.AudioList,
    (request: grpc_pb.Empty) => {
      return request.serializeBinary();
    },
    grpc_pb.AudioList.deserializeBinary
  );

  fetchAudioList(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AudioList>;

  fetchAudioList(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.AudioList) => void): grpcWeb.ClientReadableStream<grpc_pb.AudioList>;

  fetchAudioList(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_pb.AudioList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prolis.TopPageClient/fetchAudioList',
        request,
        metadata || {},
        this.methodDescriptorfetchAudioList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prolis.TopPageClient/fetchAudioList',
    request,
    metadata || {},
    this.methodDescriptorfetchAudioList);
  }

  methodDescriptorfetchUserInfo = new grpcWeb.MethodDescriptor(
    '/prolis.TopPageClient/fetchUserInfo',
    grpcWeb.MethodType.UNARY,
    grpc_pb.Empty,
    grpc_pb.User,
    (request: grpc_pb.Empty) => {
      return request.serializeBinary();
    },
    grpc_pb.User.deserializeBinary
  );

  fetchUserInfo(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.User>;

  fetchUserInfo(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.User) => void): grpcWeb.ClientReadableStream<grpc_pb.User>;

  fetchUserInfo(
    request: grpc_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prolis.TopPageClient/fetchUserInfo',
        request,
        metadata || {},
        this.methodDescriptorfetchUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prolis.TopPageClient/fetchUserInfo',
    request,
    metadata || {},
    this.methodDescriptorfetchUserInfo);
  }

  methodDescriptoruploadAudio = new grpcWeb.MethodDescriptor(
    '/prolis.TopPageClient/uploadAudio',
    grpcWeb.MethodType.UNARY,
    grpc_pb.Audio,
    grpc_pb.AudioId,
    (request: grpc_pb.Audio) => {
      return request.serializeBinary();
    },
    grpc_pb.AudioId.deserializeBinary
  );

  uploadAudio(
    request: grpc_pb.Audio,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AudioId>;

  uploadAudio(
    request: grpc_pb.Audio,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.AudioId) => void): grpcWeb.ClientReadableStream<grpc_pb.AudioId>;

  uploadAudio(
    request: grpc_pb.Audio,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_pb.AudioId) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prolis.TopPageClient/uploadAudio',
        request,
        metadata || {},
        this.methodDescriptoruploadAudio,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prolis.TopPageClient/uploadAudio',
    request,
    metadata || {},
    this.methodDescriptoruploadAudio);
  }

  methodDescriptordeleteTag = new grpcWeb.MethodDescriptor(
    '/prolis.TopPageClient/deleteTag',
    grpcWeb.MethodType.UNARY,
    grpc_pb.TagId,
    grpc_pb.Status,
    (request: grpc_pb.TagId) => {
      return request.serializeBinary();
    },
    grpc_pb.Status.deserializeBinary
  );

  deleteTag(
    request: grpc_pb.TagId,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.Status>;

  deleteTag(
    request: grpc_pb.TagId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Status) => void): grpcWeb.ClientReadableStream<grpc_pb.Status>;

  deleteTag(
    request: grpc_pb.TagId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_pb.Status) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prolis.TopPageClient/deleteTag',
        request,
        metadata || {},
        this.methodDescriptordeleteTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prolis.TopPageClient/deleteTag',
    request,
    metadata || {},
    this.methodDescriptordeleteTag);
  }

  methodDescriptordeleteAudio = new grpcWeb.MethodDescriptor(
    '/prolis.TopPageClient/deleteAudio',
    grpcWeb.MethodType.UNARY,
    grpc_pb.AudioId,
    grpc_pb.Status,
    (request: grpc_pb.AudioId) => {
      return request.serializeBinary();
    },
    grpc_pb.Status.deserializeBinary
  );

  deleteAudio(
    request: grpc_pb.AudioId,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.Status>;

  deleteAudio(
    request: grpc_pb.AudioId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_pb.Status) => void): grpcWeb.ClientReadableStream<grpc_pb.Status>;

  deleteAudio(
    request: grpc_pb.AudioId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_pb.Status) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prolis.TopPageClient/deleteAudio',
        request,
        metadata || {},
        this.methodDescriptordeleteAudio,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prolis.TopPageClient/deleteAudio',
    request,
    metadata || {},
    this.methodDescriptordeleteAudio);
  }

}

