const trigger = async (event) => {
  console.log("Event =", JSON.stringify(event));
  event.Records.forEach((record) => {
    const { body } = record;
    if (body === "1") {
      throw new Error("Error with body = 1");
    }
  });
  return {};
};

module.exports = {
  trigger,
};
