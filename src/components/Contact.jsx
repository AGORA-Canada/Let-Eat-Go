import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1dad86a9-0c26-4298-9651-8842b9e05070");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your request has been sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => setResult(""), 4000);
  };

  return (
    <div id="contact" className="h-max bg-white">
      <div className="w-1/2 m-auto py-32 text-center">
        <h2 className="text-4xl font-bold">
          Grow your business with LET EAT GO
        </h2>
        <p className="mt-4">
          Feel free to contact us any time. We will get back to you as soon as
          we can.
        </p>
        <form onSubmit={onSubmit} className="w-full mt-10 flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <label>Company Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-1 border-[#5B5B5B] rounded-md"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label>Contact information</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-1 border-[#5B5B5B] rounded-md"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label>Email</label>
            <input
              type="email"
              name="name"
              required
              className="w-full p-2 border border-1 border-[#5B5B5B] rounded-md"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label>How can we help you?</label>
            <textarea
              type="text"
              name="name"
              required
              className="w-full h-32 p-2 border border-1 border-[#5B5B5B] rounded-md"
            />
          </div>
          <button className="block w-56 py-2 rounded font-bold bg-orange-500 text-white mx-auto mt-8">
            Submit
          </button>

         <p className="text-sm">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
