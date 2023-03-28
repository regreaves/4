export function main(args) {
  const { event } = args;

  return {
    body: {
      event
    },
    headers: {
      event
    },
    statusCode: 200
  };
}
