import { BigNumber, ethers } from "ethers";

const tokenContract: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

const holderAddresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const abi = [
    "function balanceOf(address owner) view returns (uint256)",
];


const contract = new ethers.Contract(tokenContract, abi, provider);

function convertBalance(balance: BigNumber, decimals: number) {
    const formattedBalance = ethers.utils.formatUnits(balance, decimals);
    return ethers.utils.commify(formattedBalance);
}

async function getBalance() {
    for (const address of holderAddresses) {
        const balance = await contract.balanceOf(address);
        const balanceOutput = convertBalance(balance, 8);
        console.log(`${address} ${balanceOutput}`);
    }
}

getBalance();
