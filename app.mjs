import mongoose from "mongoose";

const url_bd = "mongodb://localhost:27017/banco";

mongoose
  .connect(url_bd, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.log("Error en la conexión a la base de datos", error);
  });

const esquema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  numeroCuenta: {
    type: Number,
    required: true,
    unique: true,
  },
  saldo: {
    type: Number,
    required: true,
  },
});

const Cuenta = mongoose.model("Cuenta", esquema);

Cuenta.create({
  nombre: "Juan",
  apellido: "Lopez",
  numeroCuenta: 12345678,
  saldo: 10000,
})
  .then(() => {
    console.log("Cuenta creada exitosamente");
  })
  .catch((error) => {
    console.log("Error al crear la cuenta: ", error);
  });
