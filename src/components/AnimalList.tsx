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

  const remove=(index:number)=>{
    const newLis=list.filter((animal,i)=>{return i!==index})
    setList(newLis);
  }


  return (
    <div className="animalZoo">
      <table>
        <th>
          <tr>
            <td>vrsta</td>
            <td>ime</td>
            <td>datumRodjenja</td>
            <td></td>
          </tr>
        </th>
        {list.map((animal: Animal,index) => (
          <tr>
            <td>{animal.vrsta}</td>
            <td>{animal.ime}</td>
            <td>
              {animal.datumRodjenja
                ? animal.datumRodjenja.toISOString()
                : "Nepoznat"}
            </td>
            <td><button onClick={()=>remove(index)}>ukloni</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default AnimalList;
