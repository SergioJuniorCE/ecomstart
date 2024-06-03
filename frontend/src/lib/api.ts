import { type ApiRoutes } from '../../../backend/src/routes/app'
import { hc } from 'hono/client'

export const client = hc<ApiRoutes>('/')
export const api = client.api

