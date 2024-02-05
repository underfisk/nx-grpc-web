/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export interface ChatMessage {
  from: string;
  msg: string;
  time: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Empty {
}

export interface UserList {
  users: User[];
}

export interface JoinResponse {
  error: number;
  msg: string;
}

export interface ReceiveMsgRequest {
  user: string;
}

function createBaseChatMessage(): ChatMessage {
  return { from: "", msg: "", time: "" };
}

export const ChatMessage = {
  encode(message: ChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    if (message.time !== "") {
      writer.uint32(26).string(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.time = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ChatMessage>): ChatMessage {
    return ChatMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChatMessage>): ChatMessage {
    const message = createBaseChatMessage();
    message.from = object.from ?? "";
    message.msg = object.msg ?? "";
    message.time = object.time ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", name: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Empty>): Empty {
    return Empty.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseUserList(): UserList {
  return { users: [] };
}

export const UserList = {
  encode(message: UserList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserList>): UserList {
    return UserList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserList>): UserList {
    const message = createBaseUserList();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseJoinResponse(): JoinResponse {
  return { error: 0, msg: "" };
}

export const JoinResponse = {
  encode(message: JoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.error = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<JoinResponse>): JoinResponse {
    return JoinResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JoinResponse>): JoinResponse {
    const message = createBaseJoinResponse();
    message.error = object.error ?? 0;
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseReceiveMsgRequest(): ReceiveMsgRequest {
  return { user: "" };
}

export const ReceiveMsgRequest = {
  encode(message: ReceiveMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiveMsgRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiveMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ReceiveMsgRequest>): ReceiveMsgRequest {
    return ReceiveMsgRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReceiveMsgRequest>): ReceiveMsgRequest {
    const message = createBaseReceiveMsgRequest();
    message.user = object.user ?? "";
    return message;
  },
};

export type ChatServiceDefinition = typeof ChatServiceDefinition;
export const ChatServiceDefinition = {
  name: "ChatService",
  fullName: "ChatService",
  methods: {
    join: {
      name: "join",
      requestType: User,
      requestStream: false,
      responseType: JoinResponse,
      responseStream: false,
      options: {},
    },
    sendMsg: {
      name: "sendMsg",
      requestType: ChatMessage,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    receiveMsg: {
      name: "receiveMsg",
      requestType: Empty,
      requestStream: false,
      responseType: ChatMessage,
      responseStream: true,
      options: {},
    },
    getAllUsers: {
      name: "getAllUsers",
      requestType: Empty,
      requestStream: false,
      responseType: UserList,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ChatServiceImplementation<CallContextExt = {}> {
  join(request: User, context: CallContext & CallContextExt): Promise<DeepPartial<JoinResponse>>;
  sendMsg(request: ChatMessage, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  receiveMsg(
    request: Empty,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ChatMessage>>;
  getAllUsers(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<UserList>>;
}

export interface ChatServiceClient<CallOptionsExt = {}> {
  join(request: DeepPartial<User>, options?: CallOptions & CallOptionsExt): Promise<JoinResponse>;
  sendMsg(request: DeepPartial<ChatMessage>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  receiveMsg(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<ChatMessage>;
  getAllUsers(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<UserList>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
