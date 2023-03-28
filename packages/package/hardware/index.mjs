export function main(args) {
  const { event } = args;

  return {
    body: {
      constant: constant,
      event
    },
    headers: {
      event
    },
    statusCode: 200
  };
}
