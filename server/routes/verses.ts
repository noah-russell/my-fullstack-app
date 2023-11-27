import { Router } from 'express'
import * as db from '../db/connection.ts'

const router = Router()
// GET /api/v1/verses
router.get('/', async (req, res) => {
  try {
    const verses = await db.getAllVerses()
    res.json(verses)
  } catch (err) {
    res.sendStatus(500)
    console.error((err as any).message)
  }
})

// DELETE /api/v1/verses/:id
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteVerse(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete verse')
  }
})

export default router
