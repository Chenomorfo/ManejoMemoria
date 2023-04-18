export class Trabajo {
  constructor(label = String(), size = 0, start = 0, state = false, work = 0) {
    this.label = label;
    this.start = start;
    this.size = size;
    this.state = state;
    this.work = work;
  }
}

export class Asignacion {
  constructor(size = 0, format = "KB") {
    this.size = size;
    this.format = format;
  }
}
//Tamaño Estandar en MB
export const CalcularAsignacion = (size = 0, format = "KB") => {
  return format === "KB" ? size / 1024 : format === "MB" ? size : size * 1024;
};
