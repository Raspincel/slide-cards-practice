import { useEffect, useState } from 'react'
import Card from './components/Card'
import { StyledButton, StyledContainer } from './style';

interface User {
  name: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(0)
  
  const [toggleAnimation, setToggleAnimation] = useState(false)

  const [currentUsers, setCurrentUsers] = useState<User[]>([])
  const [auxiliarUsers, setAuxiliarUsers] = useState<User[]>([])
  const [pageDirection, setPageDirection] = useState<"" | "next" | "previous">("")
  useEffect(()=> {
    const fetchUsers = async ()=> {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users: User[] = await res.json()
      setUsers(users)
      setSize(Math.ceil(users.length / 3))

    }

    fetchUsers()
  }, [])

  useEffect(()=> {
    getPage(page, setCurrentUsers)
  }, [users, page])

  const getPage = (page: number, setFunc: React.Dispatch<React.SetStateAction<User[]>>)=> {
    const renderUsers = users.slice((page - 1) * 3, page * 3)
    setFunc(renderUsers)
  }

  const nextPage = ()=> { 
      setAuxiliarUsers(currentUsers)
      setPageDirection("next")

      const newPage = page === size - 1 ? size : (page + 1) % size
      setPage(newPage)
      setToggleAnimation(!toggleAnimation)
  }
  const previousPage = ()=> { 
      setAuxiliarUsers(currentUsers)
      setPageDirection("previous")

      const newPage = page > 1 ? page - 1 : size
      setPage(newPage)
      setToggleAnimation(!toggleAnimation)
  }

  return (<>
          <StyledContainer>
            <div className="cards-container">

                <div className={`cards auxiliar ${pageDirection === "previous" ? "aux-previous" : "aux-next"}`} key={String(toggleAnimation) + String(Math.random())}>
                  {auxiliarUsers?.map((user, index)=> {
                    return <Card key={index} name={user.name} email={user.email}/>
                  })}
                </div>

                <div className={`cards ${pageDirection === "previous" ? "main-prev" : "main-next"
              }`} key={String(toggleAnimation) + String(Math.random())} >
                {currentUsers?.map((user, index)=> {
                  return <Card key={index} name={user.name} email={user.email}/>
                })}
                </div>
              </div>

              <div className="buttons">
                  <StyledButton onClick={previousPage}>Anterior</StyledButton>
                  <span>{page}</span>
                  <StyledButton onClick={nextPage}>Próximo</StyledButton>
              </div>
          </StyledContainer>
      </>
  )
}

export default App
