exports.stringPropertySchema = `
type CDP_StringProperty implements CDP_PropertyInterface {
  name : ID!
  minOccurrences : Int
  maxOccurrences : Int
  tags : [String]
  regexp : String
  defaultValue : String
}

input CDP_StringPropertyInput {
  name : ID!
  minOccurrences : Int
  maxOccurrences : Int
  tags : [String]
  regexp : String
  defaultValue : String
}
`;
