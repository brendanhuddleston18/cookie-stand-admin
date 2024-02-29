export default function Form(props) {
    return (
      <div className="flex flex-col items-center">
        <p>{props.title}</p>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }