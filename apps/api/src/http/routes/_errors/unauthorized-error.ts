export class UnauthotizedError extends Error {
  constructor(message?: string) {
    super(message ?? 'Unauthorized.')
  }
}
