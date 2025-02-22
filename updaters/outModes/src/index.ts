import { type Engine, assertValidVersion } from "@tsparticles/engine";
import { OutOfCanvasUpdater } from "./OutOfCanvasUpdater.js";

declare const __VERSION__: string;

/**
 * @param engine - The engine instance loading this plugin
 * @param refresh -
 */
export async function loadOutModesUpdater(engine: Engine, refresh = true): Promise<void> {
    assertValidVersion(engine, __VERSION__);

    await engine.addParticleUpdater(
        "outModes",
        container => {
            return Promise.resolve(new OutOfCanvasUpdater(container));
        },
        refresh,
    );
}
