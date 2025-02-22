export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="flex flex-col justify-center items-center py-4 w-full bg-red-900 shrink-0"
      >
        <div className="flex flex-col w-5/6">
          <p className="py-2 text-xl font-bold text-white">Contact</p>
          <p className="py-2 text-xl text-white">
            You can drop me a message on{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/wongyueheng/"
            >
              Linkedin
            </a>
            !
          </p>
        </div>
      </div>
    </>
  );
}
