import '../public/css/information.css';
import photo from '../public/image/photo.jpeg';

function Information() {
  return (
    <div className="container-big">
        <div className="card">
            <div className='content'>
                <div className='photo-profile'>
                    <img src={photo} alt='profile'/>
                </div>
                <p className='text-content'>Fathan Fadillah</p>
                <p className='text-content'>Telkom University</p>
                <p className='text-content'>D3 Sistem Information</p>
                <p className='text-content'>21 Tahun</p>
            </div>
        </div>
    </div>
  ); 
}

export default Information;
