import { vision } from "../utils/data";

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="container grid grid-three--col">
        {vision.map((item) => {
          return (
            <div key={item.id} className="vision-box" data-aos="fade-up">
              <h3>{item.title}</h3>
              <p>{item.des}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default Vision;