import { Absence } from "./types/Absence";
import { Semestre } from "./types/Semestre";

const lhost = "http://localhost:8080";

export async function getModulesByFiliereAndSemestre(
  filiereName: string,
  semestre: Semestre
): Promise<string[]> {
  try {
    const response = await fetch(
      `${lhost}/api/modules/filiere_and_semestre/${filiereName}/${semestre}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch modules");
    }

    const modules: string[] = await response.json();
    //console.log(modules);
    return modules;
  } catch (error) {
    console.error("Error fetching modules:", error);
    return [];
  }
}
export async function getFiliers(): Promise<string[]> {
  try {
    const response = await fetch(`${lhost}/api/filieres/names`);

    if (!response.ok) {
      throw new Error("Failed to get filieres");
    }

    const filieres: string[] = await response.json();
    //console.log(filieres);
    return filieres;
  } catch (error) {
    console.error("Error fetching filieres:", error);
    return [];
  }
}

export const getElementsByModule = async (moduleName: string) => {
  try {
    const response = await fetch(`${lhost}/api/elements/module/${moduleName}`);
    if (!response.ok) throw new Error("Failed to get elements");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getStudentsByFiliereAndModule = async (
  filiere: string | null,
  module: string | null
) => {
  try {
    const response = await fetch(
      `${lhost}/api/students/filiere_and_module/details/${filiere}/${module}`
    );
    if (!response.ok) throw new Error("Failed to get students");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getElementIdByName = async (name: string | null) => {
  try {
    const response = await fetch(`${lhost}/api/elements/${name}`);
    if (!response.ok) throw new Error("Failed to get element id");
    return await response.json();
  } catch (error) {
    console.error(error);
    return "";
  }
};
export const addAbsence = async (absences: Absence[]) => {
    try {
        const response = await fetch(
          "http://localhost:8080/api/absences/add-absences",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(absences),
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to add absences");
        }
  
      } catch (error) {
        console.error("Error submitting absences:", error);
      }
}