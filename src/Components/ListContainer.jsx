const ListContainer = ({ data }) => {
  return (
    <section id="ListContainer">
      {data.map((student) => (
        <article className="list-item" key={student.id}>
          <h2>{student.name}</h2>
          <p className="srcode">{student.srcode}</p>
          <p className="program">{student.program}</p>
          <button>Delete</button>
        </article>
      ))}
    </section>
  );
};

export default ListContainer;