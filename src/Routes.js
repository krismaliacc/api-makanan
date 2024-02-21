import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Routes = (app) => {

  app.post("/tambah", async (request, response) => {
    const result = {
      nama: request.body.nama,
      daerah: request.body.daerah,
      desc: request.body.desc,
    };
    let message = { message: "Berhasil" };
    try {
      await prisma.makanan.create({ data: result });
    } catch (error) {
      message = { message: "Gagal" };
    } finally {
      response.json(message);
    }
  });

  app.get("/find/all", async (req, res) => {
    const data = await prisma.makanan.findMany()
    res.json({ data: data })
  })

  app.post("/find", async (req, res) => {
    const data = await prisma.makanan.findFirst({ where: { nama: req.body.nama } })
    res.json({ data: data })
  })

};
