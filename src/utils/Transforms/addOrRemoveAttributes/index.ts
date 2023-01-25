const aAddOrRemoveAttributes = (body: Object, listAdd: string[], type: 'ADD' | 'REMOVE') => {
  const newObject = {};
  Object.keys(body).forEach((fieldName) => {
    if (type === 'ADD' ? listAdd.includes(fieldName) : !listAdd.includes(fieldName)) {
      newObject[fieldName] = body[fieldName];
    }
  });
  return newObject;
};

export default aAddOrRemoveAttributes;
