const createMovementItem = `
mutation CreateMovementItems(
  $input: [MovementItemsCreateInput! ] !
){
  createMovementItems(input:$input){
    id
  }
}
`;
  
const updateMovementItem = `
mutation UpdateMovementItem(
  $from: String
  $code: Int
  $input: [MovementItemsUpdateInput! ] !
  $company: Int!
  ) {
  updateMovementItem(
    from: $from
    code: $code,
    company: $company,
    input:$input
  ){ id }
}`;

const deleteMovementItem = `
mutation DeleteMovementItem(
  $code: [Int],
  $from: String,
  $company:Int!
){
deleteMovementItem(
  code: $code
  from: $from
  company:$company
)
}`;

module.exports = {
  createMovementItem,
  updateMovementItem,
  deleteMovementItem
}