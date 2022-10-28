import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";


const SingleItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemId = useParams();
  const [loaded, setLoaded] = useState(false);


  const allItems = useSelector((state) => state.items);
  const item = allItems[itemId.itemId];
  console.log("item", item);

  useEffect(() => {
    (async () => {
      await dispatch(getAllItemsThunk())
      await setLoaded(true);
    })()
  }, [])

}


return (
  <div>
    <h1>Single Item</h1>
    <div><img src={item?.item_img} alt="Item Image"></img></div>
  </div>
)
export default SingleItem;
