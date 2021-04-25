// Anything exported from this file is importable by other in-browser modules.

const text = "";
// just a plain js code to avoid compilers needed for es6 syntax
function Communication() {
  this._message = "";
  this.send = (message) => {
    this._message = message;
  };
  this.getMessage = () => {
    return this._message;
  };
}

// class Communication {
//     constructor(){}
//     private _message = '';
//     public send(message: string =''): void {
//         this._message = message;
//     }
//     public getMessage(): string{
//         return this._message;
//     }
// };
const bridge = new Communication();
export const Bridge = new Communication();
