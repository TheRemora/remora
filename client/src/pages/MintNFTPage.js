import React, { useEffect, useState } from 'react';
import { ethers, Contract } from 'ethers';
import SiteLogo from '../widgets/SiteLogo';
import { useDrop } from 'react-dnd';
import AnimatedButton from '../widgets/buttons';
import NFTCards from '../components/NFTCards';

export const SelectedNFTContext = React.createContext({ dropped: null });

function MintNFTPage() {
  const { ethereum } = window;
  const [haveMetamask, sethaveMetamask] = useState(false);
  const [provider, setProvider] = useState({});
  const [nftList, setNftList] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

  const [droppablArea, setDroppableArea] = useState([]);

  useEffect(() => { // run only once
    if (!ethereum) {
      return sethaveMetamask(false);
    }
    return sethaveMetamask(true);
  }, []);

  const connectWallet = async () => {
    try {
      if (!haveMetamask) {
        alert('MetaMask wallet not available!');
        return;
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      setProvider(provider);

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  const fetchSNFTS = async () => {
    const _result = await fetch('http://localhost:5050/api/snfts', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const result = await _result.json();
    return result;
  };

  useEffect(() => { // run only once
    const fetchData = async () => {
      return await fetchSNFTS();
    };

    fetchData().then((data) => {
      setNftList(data);
    });
  }, []);

  const mintNFT = async () => {
    const _result = await fetch('http://localhost:5050/api/contract/ERC721CNFT', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const result = _result.json();
    result.then(async (data) => {
      const abi = data.abi;
      const contract = new Contract("0x5A8e187d7bE1dAEbe02B72196A6A01daDd3C361c", abi, provider.getSigner());
      const snftAddresses = [];
      const snftTokenId = [];
      droppablArea.map((nft) => {
        snftAddresses.push(nft.collectionAddress);
        snftTokenId.push(nft.tokenID);
      });
      return contract.mint(1, snftAddresses, snftTokenId);
    }).then((result) => {
      alert(result);
    });
  }

  const [{ isOver }, dropRef] = useDrop({
    accept: 'image',

    drop: (item, monitor) => dropped(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const dropped = (id) => {
    console.log(id);
    const selectedNFt = nftList.filter((nft) => id === nft.id);
    setDroppableArea((droppedArea) => [...droppedArea, selectedNFt[0]]);
    setNftList(nftList.filter((nft) => nft.id !== id));
  };

  return (
    <SelectedNFTContext.Provider value={{ dropped }}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="h-screen">
          <aside className="w-[29rem] " aria-label="Sidebar">
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 py-4 px-6 bg-gray-50 rounded h-screen dark:bg-gray-800">
              {/* Sidebar Logo */}
              <a href="/" className="flex items-center text-center pl-2.5 mb-5">
                <SiteLogo className="mr-3 mt-6 h-12 sm:h-7" alt="Site Logo" />
              </a>

              {/* Search Bar */}
              <div>
                <form className="my-16">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      onChange={fetchSNFTS}
                      type="search"
                      id="default-search"
                      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search NFTs & Collections..."
                      required=""
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#14E2B2] dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/* NFTs */}
              {nftList
                .map((nft) => (
                  <NFTCards
                    index={nft.id}
                    key={nft.id}
                    id={nft.id}
                    imageURL={nft.imageURL}
                    imageName={nft.imageName}
                    collectionUUID={nft.collectionUUID}
                    collectionAddress={nft.collectionAddress}
                    tokenID={nft.tokenID}
                  />
                ))}
            </div>
          </aside>
        </div>
        <div className="space-y-8 ">
          <div className="flex mx-auto justify-end my-8 items-center">
            {accountAddress}
            {!isConnected && (
              <button
                onClick={connectWallet}
                className="bg-background text-2xl px-6 py-2 border-2 border-[#14E2B2] hover:text-black hover:bg-[#14E2B2] hover:transition-all  rounded ml-32 "
              >
                Connect To Wallet
              </button>
            )}
          </div>
          <div>
            <h1 className="text-white ml-32 mt-24 text-4xl ">Drop here NFTs to Mint</h1>
            {/* Drag and Drop */}
            <div
              ref={dropRef}
              className={
                isOver
                  ? 'w-[60vw] h-[50vh] my-16 ml-32 bg-slate-400 border-green-500 border-spacing-4'
                  : 'w-[60vw] h-[50vh] my-16 ml-32 bg-slate-600  border-spacing-4 overflow-hidden flex gap-10 '
              }
            >
              <div className="h-full w-full grid grid-cols-2 gap-10 items-center px-6 ">
                {/* Display the dropped nfts */}
                {droppablArea.map((nft) => {
                  return (
                    <div>
                      <NFTCards
                        index={nft.id}
                        key={nft.id}
                        id={nft.id}
                        imageURL={nft.imageURL}
                        imageName={nft.imageName}
                        collectionUUID={nft.collectionUUID}
                        collectionAddress={nft.collectionAddress}
                        tokenID={nft.tokenID}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <AnimatedButton
              onClickFunc={mintNFT}
              className="relative bg-background text-2xl px-6 py-2 border-2 border-[#14E2B2] hover:text-black hover:bg-[#14E2B2] hover:transition-all  rounded ml-32 my-6"
              buttonName="Mint"
            />
          </div>
        </div>
      </div>
    </SelectedNFTContext.Provider>
  );
}

export default MintNFTPage;
