import { ChatServiceDefinition } from '@grpc-nx-boilerplate/grpc';
import { createChannel, createClientFactory } from 'nice-grpc-web';

const GRPC_SERVER_ENDPOINT = process.env['GRPC_SERVER_ENDPOINT'] ?? '';

const channel = createChannel(GRPC_SERVER_ENDPOINT);

const factory = createClientFactory().use((call, options) =>
  call.next(call.request, {
    ...options,
    // The line below demonstrates how metadata can be set
    // metadata: Metadata(options.metadata).set(
    //   'Authorization',
    //   `Bearer <YourTokenGoesHere>`
    // ),
  })
);
export const chatServiceClient = factory.create(ChatServiceDefinition, channel);
