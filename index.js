const { Connection, PublicKey, clusterApiUrl, KeyPair, LAMPORTS_PER_SOL } =
  requiere("@solana/web3.js");

const wallet = new KeyPair();

const publicKey = wallet._keypair.publicKey;
const secretKey = wallet._keypair.secretKey;
