import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span className="text-primary">Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/hifadhi_logo.png"
        alt="logo"
        className="mx-auto h-12 w-12"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Bringing Savings & Investment Groups Onchain"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-2xl pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join a new era of collective savings and investment. Hifadhi empowers communities to pool funds, earn yield from DeFi protocols, invest in tokenised real estate, Real World Assets (RWAs) such as tokenised equities and participate in Decentralized Physical Infrastructure (DePIN) projects. Be the first to access Hifadhi. Sign up now and secure early access!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
