export function main(args) {
  const { action } = args;

  return {
    body: {
      action
    },
    headers: {
      action
    },
    statusCode: 200
  };
}
