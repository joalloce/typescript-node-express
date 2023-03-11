import Developer from "../types/Developer";

class DeveloperDTO {
  static developers: Array<Developer> = [];

  static createDeveloper(developer: Developer): Developer {
    DeveloperDTO.developers.push(developer);
    return developer;
  }

  static deleteDeveloper(id: string): Developer | null {
    const d = DeveloperDTO.developers.find((d) => d.id === id); // check if dev exists

    if (!d) {
      return null;
    }

    DeveloperDTO.developers = DeveloperDTO.developers.filter(
      (d) => d.id !== id
    );

    return d;
  }

  static getDeveloper(id: string): Developer | undefined {
    const d = DeveloperDTO.developers.find((d) => d.id === id);
    return d;
  }

  static getDevelopers(): Developer[] {
    return this.developers;
  }

  static updateDeveloper(developer: Developer): Developer | null {
    const result = DeveloperDTO.deleteDeveloper(developer.id);

    if (!result) {
      return null;
    }

    DeveloperDTO.createDeveloper(developer);

    return developer;
  }
}

export default DeveloperDTO;
