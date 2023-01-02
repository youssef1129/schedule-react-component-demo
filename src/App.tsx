import { useState } from 'react';
import { Schedule, Ireservation } from 'schedule-react-component';

const r = "[{ day: 6, hour: 14, month: 1, year: 2023 },{ day: 6, hour: 15, month: 1, year: 2023 },{ day: 7, hour: 16, month: 1, year: 2023 },{ day: 6, hour: 15, month: 2, year: 2023 },{ day: 6, hour: 15, month: 3, year: 2023 },{ day: 6, hour: 15, month: 4, year: 2023 },{day: 31, hour: 15, month: 1, year: 2023 }]"
const reservs: Array<Ireservation> = [
  { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 14, id: 1, month: 1, year: 2023 },
  { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 1, year: 2023 },
  { date: "2023-01-07T00:00:00.000Z", day: 7, hour: 16, id: 1, month: 1, year: 2023 },
  { date: "2023-02-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 2, year: 2023 },
  { date: "2023-03-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 3, year: 2023 },
  { date: "2023-04-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 4, year: 2023 },
  { date: "2023-05-06T00:00:00.000Z", day: 31, hour: 15, id: 1, month: 1, year: 2023 },
  { day: 3,hour: 9,month: 1,year: 2023}
]

function App() {
  const [reservations, setReservations] = useState(reservs)
  const onAdd = (hour: number, day: number, month: number, year: number) => {
    setReservations((prev) => [...prev, { day: day, hour: hour, month: month, year: year }])

  }
  const onCancel = (hour: number, day: number, month: number, year: number) => {
    setReservations((prev) => prev.filter((p)=>!(p.hour===hour&&p.day===day&&p.month===month&&p.year===year)))
  }


  const wh = [{ hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }, { hour: '17-18', isReserved: false, val: 17 }]
  const s1 = "[{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }]"
  const s2 = "[{ hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 },{ hour: '17-18', isReserved: false, val: 15 }]"
  return (
    <div className='cnt'>
      <h1 style={{ textAlign: 'center' }}>schedule-react-component</h1>
      <div className='cnt2'>
        <Schedule reservations={reservations} OnAdd={onAdd} onCancel={onCancel} />
        <div>
          <h1>Default</h1>
          <div>
            <label>daysOff : </label>
            <code>['Sun', 'Sat']</code>
          </div>
          <div>
            <label>workingHours : </label>
            <code>{s1}</code>
          </div>
        </div>
      </div>

      <div className='cnt2'>
        <Schedule cancelDialogClass='dialog' dialogClass='dialog' cancelDialogTitle='you custom cancel dialog title' input={<Select />} dialogTitle='your custom title' calendarClass='cal' dayClass='day' hourClass='hour' reservations={reservations} OnAdd={onAdd} onCancel={onCancel} workingHours={wh} daysOff={['Wed', 'Fri']} />
        <div>
          <h1>Custom</h1>
          <div>
            <label>daysOff : </label>
            <code>['Wed', 'Fri']</code>
          </div>
          <div>
            <label>workingHours : </label>
            <code>{s2}</code>
          </div>
          <div>
            <label>calendarClass : </label>
            <code>your custom css class</code>
          </div>
          <div>
            <label>dayClass : </label>
            <code>your custom css class</code>
          </div>
          <div>
            <label>dialogClass : </label>
            <code>your custom css class</code>
          </div>
          <div>
            <label>cancelDialogClass : </label>
            <code>your custom css class</code>
          </div>
          <div>
            <label>hourClass : </label>
            <code>your custom css class</code>
          </div>
          <div>
            <label>dialogTitle : </label>
            <code>your custom title</code>
          </div>
          <div>
            <label>dialogTitle : </label>
            <code>your custom cancel dialog title</code>
          </div>
          <div>
            <label>input : </label>
            <code>your custom dialog input (select,input, other component)</code>
          </div>
        </div>
      </div>

      <div>
        <h1>reservations data example</h1>
        <code>{r}</code>
      </div>

    </div>
  );
}

export default App;

const Select = () => {
  return (
    <select value={1}>
      <option value="1">name1</option>
      <option value="2">name2</option>
      <option value="3">name3</option>
    </select>
  )
}