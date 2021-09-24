import { Card, CardContent, Typography, CardActions, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Modal, Box, Alert, TextField, CircularProgress } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Key } from "readline"
import { drawMoneyAction } from "../../redux/actions/Money.action"
import { NumFormatter } from "../../Utils/NumberFormarter"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
enum Type {
  draw = 'Draw',
  transfer = 'Transfer',
}
const ListSave = () => {
  const dispatch = useDispatch()
  const { inforUser } = useSelector((state: { user: any }) => state.user)
  const { drawList, isLoading } = useSelector((state: { money: any }) => state.money)
  const { username, balances } = inforUser
  const [open, setOpen] = useState(false)
  const [types, setTypes] = useState<Type>(Type.draw)
  const [alert, setAlert] = useState(false)
  const handleOpen = (type: Type | ((prevState: Type) => Type)) => {
    setOpen(true)
    setTypes(type)
  }
  const handleClose = () => setOpen(false)
  const [drawValues, setDrawValues] = useState({
    totalDraw: 0,
    description: '',
  })
  const handleChangeDrawValues = (e: { target: { name: any; value: any } }) => {
    setDrawValues({ ...drawValues, [e.target.name]: e.target.value })
  }
  const handleSubmmitDrawMoney = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (
      drawValues.totalDraw < 1000 ||
      drawValues.description === '' ||
      drawValues.totalDraw > balances
    ) {
      setAlert(true)
      return
    } else {
      setAlert(false)
      // id:any,total: any,script: any,before: any,after: any
      const afterBalance = inforUser.balances - drawValues.totalDraw
      const drawInfor = {
        id: inforUser.id,
        total: drawValues.totalDraw,
        script: drawValues.description,
        before: inforUser.balances,
        after: afterBalance,
      }
      dispatch(drawMoneyAction(drawInfor))
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography gutterBottom component='div'>
            Hello:{username}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            Available balances : {NumFormatter.format(balances)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Take care about your money if you don't want to lossing them :D
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => handleOpen(Type.draw)}>
            Draw
          </Button>
          <Button size='small' onClick={() => handleOpen(Type.transfer)}>
            transfer money to accounts
          </Button>
        </CardActions>
      </Card>
      <div className='draw-history'>
        {/* <ListDraw draws={draws} /> */}
        <ListDraw2 draws={drawList} />
      </div>
      <ModelTransferMoney
        open={open}
        handleClose={handleClose}
        type={types}
        drawValues={drawValues}
        handleChangeDrawValues={handleChangeDrawValues}
        onSubmit={handleSubmmitDrawMoney}
        alert={alert}
        loading={
          isLoading
        }
      />
    </>
  )
}
export default ListSave
const ListDraw2 = ({ draws }: any) => {
  const dataCellmap = [
    { name: 'Total Draw' },
    {
      name: 'Before Balances',
    },
    {
      name: 'After Balances',
    },
    {
      name: 'Title',
    },
    {
      name: 'Delete',
    },
  ]
  const dispatch = useDispatch()
  const handleDeleteDrawHistory = (id: any) => {
    // dispatch(deleteDrawHistory(id))
  }
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: '50px', borderRadius: '7px' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {dataCellmap.map((data, idx) => {
              return (
                <TableCell align='center' key={idx}>
                  {data.name}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {draws &&
            draws.map(
              (row: {
                id_draw: React.Key | null | undefined
                date_draw: Date
                total_draw: number
                after_balance: number
                before_balance: number
                script_draw: string
              }) => (
                <TableRow
                  key={row.id_draw}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.date_draw}
                  </TableCell>
                  <TableCell align='center'>
                    {NumFormatter.format(row.total_draw)}
                  </TableCell>
                  <TableCell align="center">
                    {NumFormatter.format(row.before_balance)}
                  </TableCell>
                  <TableCell align='center'>
                    {NumFormatter.format(row.after_balance)}
                  </TableCell>
                  <TableCell align="center">{row.script_draw}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleDeleteDrawHistory(row.id_draw)}>
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

interface ModelProps {
  open: boolean
  handleClose: () => void
  type: string
  drawValues: {
    totalDraw: number
    description: string
  }
  handleChangeDrawValues: (e: any) => void
  onSubmit: (e: any) => void
  alert: boolean,
  loading: boolean
}
const ModelTransferMoney: React.FC<ModelProps> = ({
  open,
  handleClose,
  type,
  drawValues,
  handleChangeDrawValues,
  onSubmit,
  alert,
  loading
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }
  const formModel = {
    marginBottom: "20px",
    width: "100%",
  }
  if (type === Type.draw) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmitCapture={onSubmit}>
          {alert ? (
            <Alert variant="outlined" severity="error">
              -Some infor so weird <br />
              -make sure money draw more than 1000VND
              <br />
              -withdrawal cannot be greater than the balance
              <br />— check it out!
            </Alert>
          ) : null}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={formModel}
          >
            Draw Money
          </Typography>
          <TextField
            sx={formModel}
            required
            id="outlined-required"
            label="Money Draw"
            type="number"
            value={drawValues.totalDraw}
            name="totalDraw"
            onChange={(e) => handleChangeDrawValues(e)}
          />
          <TextField
            sx={formModel}
            required
            id="outlined-required"
            label="Description"
            value={drawValues.description}
            name="description"
            onChange={(e) => handleChangeDrawValues(e)}
          />
          <Button variant="outlined" type="submit">
            Confirm
          </Button>
          {loading
            ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : null
          }
        </Box>
      </Modal>
    )
  } else {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            For Transfer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    )
  }
}
