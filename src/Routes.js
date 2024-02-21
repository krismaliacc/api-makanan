import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const data = [
  {
    nama: "Rawon setan",
    daerah: "Surabaya",
  },
  {
    nama: "Pecel",
    daerah: "Madiun",
  },
  {
    nama: "Lontong kupang",
    daerah: "Sidoarjo",
  },
  {
    nama: "Nasi Penggel",
    daerah: "Kebumen",
  },
  {
    nama: "rujak cingur",
    daerah: "Surabaya",
  },
  {
    nama: "soto ngas",
    daerah: "nganjuk",
  },
];
export const Routes = (app) => {
  app.get("/tes", (request, response) => {
    response.json({ data: data });
  });
  app.post("/makanan", (request, response) => {
    response.json(request.body);
  });
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
  app.get("/find/all",async(req,res) => {
   const data = await prisma.makanan.findMany()
   res.json({data:data})
})
    app.post("/find",async(req,res) => {
        const data = await prisma.makanan.findFirst({where:{nama:req.body.nama}})
        res.json({data:data})
    })
};
