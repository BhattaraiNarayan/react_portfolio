
const Contact = () => {
  return (
    <div className="gradient-page bg-white p-2 md:pl-16  md:mr-16 md:pl-24">
      <h1 className="text-transparent gradient-head text-4xl font-bold text-center p-4">
        お問合せ先
      </h1>
      <form
        action="https://getform.io/f/pbygpnyb"
        method="post"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="font-bold text-xl py-1">お名前</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-xl py-1">電話</label>
            <input
              type="tel"
              name="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="00000000000"
              pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="font-bold text-xl py-2">メール アドレス</label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="font-bold text-xl py-2">件名</label>
          <input
            type="text"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="font-bold text-xl py-2">お問合せ内容</label>
          <textarea
            rows={10}
            name="message"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          ></textarea>
        </div>
        <button
          className="bg-indigo-400  text-gray-100 mt-4 w-full p-4"
          type="submit"
        >
          送信
        </button>
      </form>
    </div>
  );
}

export default Contact;
