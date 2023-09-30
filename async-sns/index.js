const trigger = async (event) => {
  console.log("Event =", JSON.stringify(event));
  event.Records.forEach((record) => {
    if (record.Sns.Message === "1") {
      throw new Error("Error with body = 1");
    }
  });
  return {};
};

module.exports = {
  trigger,
};
