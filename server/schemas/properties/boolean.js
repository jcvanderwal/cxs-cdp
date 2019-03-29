exports.booleanPropertySchema = `
type CDP_BooleanProperty implements CDP_PropertyInterface {
  name : ID!
  minOccurrences : Int
  maxOccurrences : Int
  tags : [String]
  defaultValue : Boolean
}

input CDP_BooleanPropertyInput {
  name : ID!
  minOccurrences : Int
  maxOccurrences : Int
  tags : [String]
  defaultValue : Boolean
}
`;
