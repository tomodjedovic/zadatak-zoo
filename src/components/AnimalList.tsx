import React, { FC, useState } from "react";

interface Animal {
  vrsta: string;
  ime: string;
  datumRodjenja?: Date;
}

const animals: Animal[] = [
  { vrsta: "pas", ime: "Badi", datumRodjenja: new Date() },
  { vrsta: "macka", ime: "Zuco" },
  { vrsta: "koza", ime: "Bela" },
  { vrsta: "krava", ime: "Sarulja" },
  { vrsta: "ptica", ime: "Cvrle", datumRodjenja: new Date(10, 3, 2019) },
];

const AnimalList: FC = () => {
  const [list, setList] = useState(animals);

  return (
    <div>
      <table>
        <th>
          <tr>
            <td>vrsta</td>
            <td>ime</td>
            <td>datumRodjenja</td>
          </tr>
        </th>
        {list.map((animal: Animal) => (
          <tr>
            <td>{animal.vrsta}</td>
            <td>{animal.ime}</td>
            <td>
              {animal.datumRodjenja
                ? animal.datumRodjenja.toISOString()
                : "Nepoznat"}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default AnimalList;
