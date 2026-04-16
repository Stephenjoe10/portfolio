/// <reference types="node" />

declare namespace NodeJS {
	interface ProcessEnv {
		SANITY_PROJECT_ID: string
		SANITY_VERSION: string
	}
}