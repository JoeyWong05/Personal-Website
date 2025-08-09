/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Types for likes API
 */
export interface LikesResponse {
  likeCounts: Record<number, number>;
}

export interface UpdateLikeRequest {
  projectId: number;
}

export interface UpdateLikeResponse {
  projectId: number;
  newCount: number;
  likeCounts: Record<number, number>;
}
