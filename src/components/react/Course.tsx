import { courses } from "@/data/courses";

const courseStyle = `
tr { display: flex; justify-content: center; align-items: center; }
td.piccol { flex: 1; text-align: center; }
td.textcol { flex: 3; text-align: center; }
td img { max-width: 100%; height: auto; }
.inline-image { vertical-align: middle; }
`;

export default function Course() {
  return (
    <>
      <style>{courseStyle}</style>
      <table className="table">
        <tbody>
          {courses.map((course) => (
            <tr key={course.url}>
              <td className="piccol">
                {course.image && (
                  <img src={course.image} alt={course.name} loading="lazy" />
                )}
              </td>
              <td className="textcol">
                <p>
                  <b>
                    <a href={course.url}>{course.name}</a>
                  </b>
                  <img
                    className="inline-image"
                    src={`https://skillicons.dev/icons?i=${course.skills}&theme=light`}
                    alt={course.skills}
                    loading="lazy"
                  />
                </p>
                {course.description && <p>{course.description}</p>}
                <a href={course.repoUrl}>{"->"}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
