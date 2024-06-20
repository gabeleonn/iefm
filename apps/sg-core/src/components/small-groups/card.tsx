import { ReactNode } from "react";

export function SmallGroupCard({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col p-3 w-[calc(100vw-40px)] bg-background text-text rounded-[20px]">
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt=""
        className="w-full bg-background rounded-xl mb-2"
      />
      <h2 className="text-2xl font-bold">Celula Zoe</h2>
      <p className="text-sm text-secondary mb-4">João Silva & Maria Santos</p>
      <button className="text-sm text-white bg-primary rounded-lg p-2 w-full h-16">
        Gerenciar
      </button>
    </div>
  );
}
