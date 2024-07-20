import React from 'react'

const Problems = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataString = searchParams.get('data');
    var urll='/library?data=';
    var durl='/dashbord?data=';
    const [books, setBooks] = useState([]);
    const [borrowedbooks, setBorrowedBooks] = useState([]);

    const showunborrow = () => {

        fetch('http://localhost:8000/api/librarybooknb',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify()
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // console.log(data.books)
            // console.log(data[0].title)
            if(data){
                // alert("success");
                setBooks(data);
            }
            else{
                alert("TRY AGAIN!");
            }
        })
    };

  return (
    <section>
      <div className='problems-parent'>
        {/* <p>{dataFromLink}</p> */}
        <div className='container books'>
            {/* <h1>Unborrowed</h1> */}
            {books.map((borrowedbook, index) => (
                <div className='onebook row' key={index}>
                    {/* <h3 className='head1 bookelem col-6'>Book</h3> */}
                    {/* <div className="bookelem imparent col-6">
                        <img src={require(`${borrowedbook.posterurl}`)} alt={borrowedbook.title} title={borrowedbook.title} style={{height:"200px"}}/>
                    </div> */}
                    {/* <hr class="hrw"></hr> */}
                    {/* <h3 className='head1 bookelem col-6'>Title</h3> */}
                    {/* <div className="bookelem col-6">
                        <h3>{borrowedbook.title}</h3>
                    </div> */}
                    {/* <hr class="hrw"></hr> */}
                    {/* <h3 className='head1 bookelem col-6'>Author</h3> */}
                    {/* <div className="bookelem col-6">
                        <h3>{borrowedbook.author}</h3>
                    </div> */}
                    {/* <hr class="hrw"></hr> */}
                    {/* <h3 className='head1 bookelem col-6'>Category</h3> */}
                    {/* <div className="bookelem col-6">
                        <h3>{borrowedbook.category_name}</h3>
                    </div> */}
                    {/* يمكنك إضافة المزيد من العناصر حسب حاجتك */}
                </div>
            ))}
        </div>
      </div>
    </section>
  )
  }

export default Problems
