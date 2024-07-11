import { ability } from '@saas/auth'

const userCanInvite = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')
const userCannotInvite = ability.cannot('invite', 'User')
const userCannotDelete = ability.cannot('delete', 'User')

console.log(userCanInvite)
console.log(userCanDelete)
console.log(userCannotInvite)
console.log(userCannotDelete)
