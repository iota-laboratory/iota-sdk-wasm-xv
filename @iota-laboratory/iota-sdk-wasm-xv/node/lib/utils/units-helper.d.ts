/**
 * Magnitudes for the numbers.
 */
export type Magnitudes = 'P' | 'T' | 'G' | 'M' | 'K' | '';
/**
 * Class to help with units formatting.
 */
export declare class UnitsHelper {
    /**
     * Map units.
     */
    static readonly MAGNITUDE_MAP: {
        [magnitude in Magnitudes]: {
            val: number;
            dp: number;
        };
    };
    /**
     * Format the value in the best units.
     * @param value The value to format.
     * @param decimalPlaces The number of decimal places to display.
     * @returns The formatted value.
     */
    static formatBest(value: number, decimalPlaces?: number): string;
    /**
     * Format the value in the best units.
     * @param value The value to format.
     * @param magnitude The magnitude to format with.
     * @param decimalPlaces The number of decimal places to display.
     * @returns The formatted value.
     */
    static formatUnits(value: number, magnitude: Magnitudes, decimalPlaces?: number): string;
    /**
     * Format the value in the best units.
     * @param value The value to format.
     * @returns The best units for the value.
     */
    static calculateBest(value: number): Magnitudes;
    /**
     * Convert the value to different units.
     * @param value The value to convert.
     * @param from The from magnitude.
     * @param to The to magnitude.
     * @returns The formatted unit.
     */
    static convertUnits(value: number, from: Magnitudes, to: Magnitudes): number;
}
